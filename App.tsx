import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';
import { SignUp } from '@screens/SignUp';

import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <Routes />
      <StatusBar style="auto" />
    </AuthContextProvider>
  );
}
