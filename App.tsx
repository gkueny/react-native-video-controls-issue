import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Video from 'react-native-video';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

const videoUrl =
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/360/Big_Buck_Bunny_360_10s_1MB.mp4';
function AppContent() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsPlaying(!isPlaying)}
    >
      <Video
        source={{ uri: videoUrl }}
        style={styles.video}
        controls={false}
        paused={!isPlaying}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
});

export default App;
