import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.basic.calculator',
  appName: 'Basic-calculator',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
