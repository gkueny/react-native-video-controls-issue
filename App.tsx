import { useRef } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Video, { VideoRef } from 'react-native-video';

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
  const ref = useRef<VideoRef>(null);

  const goToFullscreen = () => {
    ref.current?.presentFullscreenPlayer();
  };

  return (
    <View style={styles.container}>
      <Video
        ref={ref}
        source={{ uri: videoUrl }}
        style={styles.video}
        controls={false}
      />
      <TouchableOpacity onPress={goToFullscreen}>
        <Text>Go to fullscreen</Text>
      </TouchableOpacity>
    </View>
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
