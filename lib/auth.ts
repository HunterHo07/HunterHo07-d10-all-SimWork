import { getFromStorage, setToStorage, removeFromStorage } from './utils';

// Types
export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
  level: number;
  xp: number;
  badges: string[];
  completedQuests: string[];
  stats: Record<string, number>;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    sound: boolean;
  };
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

// Constants
const AUTH_TOKEN_KEY = 'simulex_auth_token';
const USER_DATA_KEY = 'simulex_user_data';

// Default auth state
const defaultAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

/**
 * Simulates a login request to the server
 */
export async function login(username: string, password: string): Promise<AuthState> {
  try {
    // In a real app, this would be an API call
    // For this demo, we'll fetch from our local JSON file
    const response = await fetch('/data/users.json');
    const users: User[] = await response.json();
    
    // Find the user
    const user = users.find(u => 
      (u.username === username || u.email === username) && 
      u.password === password
    );
    
    if (!user) {
      throw new Error('Invalid username or password');
    }
    
    // Generate a fake token
    const token = `token_${Math.random().toString(36).substring(2, 15)}`;
    
    // Store auth data
    const authState: AuthState = {
      user,
      isAuthenticated: true,
      token,
    };
    
    setToStorage(AUTH_TOKEN_KEY, token);
    setToStorage(USER_DATA_KEY, user);
    
    return authState;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

/**
 * Simulates a registration request
 */
export async function register(
  username: string, 
  email: string, 
  password: string, 
  name: string,
  role: string
): Promise<AuthState> {
  try {
    // In a real app, this would be an API call
    // For this demo, we'll simulate a successful registration
    
    // Check if username or email already exists
    const response = await fetch('/data/users.json');
    const users: User[] = await response.json();
    
    if (users.some(u => u.username === username)) {
      throw new Error('Username already exists');
    }
    
    if (users.some(u => u.email === email)) {
      throw new Error('Email already exists');
    }
    
    // Create a new user
    const newUser: User = {
      id: `user${users.length + 1}`,
      username,
      email,
      name,
      role,
      password, // This would never be stored in a real app!
      avatar: `/images/avatars/avatar${Math.floor(Math.random() * 5) + 1}.png`,
      level: 1,
      xp: 0,
      badges: [],
      completedQuests: [],
      stats: {
        accuracy: 50,
        speed: 50,
        problemSolving: 50,
        teamwork: 50,
      },
      preferences: {
        theme: 'system',
        notifications: true,
        sound: true,
      },
    };
    
    // Generate a fake token
    const token = `token_${Math.random().toString(36).substring(2, 15)}`;
    
    // Store auth data
    const authState: AuthState = {
      user: newUser,
      isAuthenticated: true,
      token,
    };
    
    setToStorage(AUTH_TOKEN_KEY, token);
    setToStorage(USER_DATA_KEY, newUser);
    
    return authState;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}

/**
 * Logs the user out
 */
export function logout(): void {
  removeFromStorage(AUTH_TOKEN_KEY);
  removeFromStorage(USER_DATA_KEY);
}

/**
 * Checks if the user is authenticated
 */
export function checkAuth(): AuthState {
  const token = getFromStorage<string | null>(AUTH_TOKEN_KEY, null);
  const user = getFromStorage<User | null>(USER_DATA_KEY, null);
  
  if (!token || !user) {
    return defaultAuthState;
  }
  
  return {
    user,
    isAuthenticated: true,
    token,
  };
}

/**
 * Updates the user's data
 */
export function updateUser(userData: Partial<User>): void {
  const currentUser = getFromStorage<User | null>(USER_DATA_KEY, null);
  
  if (!currentUser) {
    throw new Error('No user is currently logged in');
  }
  
  const updatedUser = {
    ...currentUser,
    ...userData,
  };
  
  setToStorage(USER_DATA_KEY, updatedUser);
}

/**
 * Adds XP to the user and levels up if necessary
 */
export function addUserXP(xpAmount: number): User {
  const currentUser = getFromStorage<User | null>(USER_DATA_KEY, null);
  
  if (!currentUser) {
    throw new Error('No user is currently logged in');
  }
  
  const newXP = currentUser.xp + xpAmount;
  const newLevel = Math.floor(Math.sqrt(newXP / 100)) + 1;
  
  const updatedUser = {
    ...currentUser,
    xp: newXP,
    level: newLevel,
  };
  
  setToStorage(USER_DATA_KEY, updatedUser);
  return updatedUser;
}

/**
 * Adds a completed quest to the user
 */
export function completeQuest(questId: string): User {
  const currentUser = getFromStorage<User | null>(USER_DATA_KEY, null);
  
  if (!currentUser) {
    throw new Error('No user is currently logged in');
  }
  
  if (currentUser.completedQuests.includes(questId)) {
    return currentUser; // Already completed
  }
  
  const updatedUser = {
    ...currentUser,
    completedQuests: [...currentUser.completedQuests, questId],
  };
  
  setToStorage(USER_DATA_KEY, updatedUser);
  return updatedUser;
}

/**
 * Adds a badge to the user
 */
export function addBadge(badgeName: string): User {
  const currentUser = getFromStorage<User | null>(USER_DATA_KEY, null);
  
  if (!currentUser) {
    throw new Error('No user is currently logged in');
  }
  
  if (currentUser.badges.includes(badgeName)) {
    return currentUser; // Already has badge
  }
  
  const updatedUser = {
    ...currentUser,
    badges: [...currentUser.badges, badgeName],
  };
  
  setToStorage(USER_DATA_KEY, updatedUser);
  return updatedUser;
}

/**
 * Updates user preferences
 */
export function updatePreferences(preferences: Partial<User['preferences']>): User {
  const currentUser = getFromStorage<User | null>(USER_DATA_KEY, null);
  
  if (!currentUser) {
    throw new Error('No user is currently logged in');
  }
  
  const updatedUser = {
    ...currentUser,
    preferences: {
      ...currentUser.preferences,
      ...preferences,
    },
  };
  
  setToStorage(USER_DATA_KEY, updatedUser);
  return updatedUser;
}
