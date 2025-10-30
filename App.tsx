import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
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
const controlsStyles = {
  hidePosition: false,
  hidePlayPause: false,
  hideForward: false,
  hideRewind: false,
  hideNext: false,
  hidePrevious: false,
  hideFullscreen: true,
  hideSeekBar: true,
  hideDuration: true,
  hideNavigationBarOnFullScreenMode: true,
  hideNotificationBarOnFullScreenMode: true,
  hideSettingButton: true,
  seekIncrementMS: 10000,
  liveLabel: 'LIVE',
};
function AppContent() {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        style={styles.video}
        controls={true}
        controlsStyles={controlsStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    flex: 1,
  },
});

export default App;
