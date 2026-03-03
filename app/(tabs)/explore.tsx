import reactLogo from '../../assets/images/react-logo.png';
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

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
        <ThemedText type="title" style={{ fontFamily: Fonts?.rounded }}>
          Explore
        </ThemedText>
      </ThemedView>

      <ThemedText>Ứng dụng này giúp bạn quét mã QR và nhận phần thưởng ngay lập tức.</ThemedText>

      <Collapsible title="Hỗ trợ đa nền tảng">
        <ThemedText>
          Bạn có thể chạy ứng dụng này trên Android, iOS và Web. Trình quét mã hoạt động tốt nhất trên thiết bị di động.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Hình ảnh tĩnh">
        <ThemedText>
          Ví dụ về cách hiển thị logo React bằng thư viện <ThemedText type="defaultSemiBold">expo-image</ThemedText>:
        </ThemedText>
        <Image
          source={reactLogo}
          style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 15 }}
          contentFit="contain"
        />
      </Collapsible>
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
    marginBottom: 10,
  },
});
