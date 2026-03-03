import reactLogo from '../../assets/images/react-logo.png';
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

// Chuyển sang relative path cho an toàn tuyệt đối trên Vercel
import { Collapsible } from '../../components/ui/collapsible';
import { ExternalLink } from '../../components/external-link';
import ParallaxScrollView from '../../components/parallax-scroll-view';
import { ThemedText } from '../../components/themed-text';
import { ThemedView } from '../../components/themed-view';
import { IconSymbol } from '../../components/ui/icon-symbol';
import { Fonts } from '../../constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{ fontFamily: Fonts.rounded }}>
          Explore
        </ThemedText>
      </ThemedView>

      <ThemedText>This app includes example code to help you get started.</ThemedText>

      {/* Các phần khác giữ nguyên... */}

      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes.
        </ThemedText>
        <Image
          source={reactLogo} // ĐÃ SỬA: Dùng biến import thay vì require(@/...)
          style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 15 }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      {/* ... giữ nguyên các phần còn lại */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
