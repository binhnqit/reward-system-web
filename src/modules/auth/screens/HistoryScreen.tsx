import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useRewardStore } from '../store/useRewardStore';

export const HistoryScreen = () => {
  const { history } = useRewardStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch sử nhận thưởng</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.code}>Mã: {item.code}</Text>
            </View>
            <Text style={styles.amount}>+{item.amount.toLocaleString()}đ</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Chưa có giao dịch nào</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
  item: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#eee',
    alignItems: 'center'
  },
  date: { fontSize: 14, color: '#666' },
  code: { fontSize: 12, color: '#999' },
  amount: { fontSize: 18, fontWeight: 'bold', color: '#28a745' },
  empty: { textAlign: 'center', marginTop: 50, color: '#999' }
});