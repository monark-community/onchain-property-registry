import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  alias: string;
  walletAddress: string;
  avatar?: string;
  selectedProfile: 'buyer' | 'seller' | 'developer' | 'agent';
}

interface WalletContextType {
  isConnected: boolean;
  user: User | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
  updateSelectedProfile: (profile: User['selectedProfile']) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const connectWallet = () => {
    // Simulate wallet connection
    const mockUser: User = {
      id: '1',
      alias: 'PropertyExplorer',
      walletAddress: '0x1234...5678',
      selectedProfile: 'buyer'
    };
    setUser(mockUser);
    setIsConnected(true);
  };

  const disconnectWallet = () => {
    setUser(null);
    setIsConnected(false);
  };

  const updateSelectedProfile = (profile: User['selectedProfile']) => {
    if (user) {
      setUser({ ...user, selectedProfile: profile });
    }
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        user,
        connectWallet,
        disconnectWallet,
        updateSelectedProfile,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};