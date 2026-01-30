import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput,
  SafeAreaView 
} from 'react-native';

const topics = [
  { id: 'Wealth_and_Social_Class', title: 'Wealth and Social Class' },
  { id: 'Financial_Systems', title: 'Financial Systems' },
  { id: 'War_and_Conquest', title: 'War and Conquest' },
];

export default function HomeScreen({ navigation }: any) {
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Теми з англійської мови</Text>
        <Text style={styles.subtitle}>Оберіть тему для вивчення</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder="Пошук теми..."
            placeholderTextColor="#9E8BB5"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <FlatList
          data={filteredTopics}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => ( 
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Topic', { id: item.id })}
              activeOpacity={0.8}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardHint}>Натисніть для вивчення →</Text>
                </View>
              </View>
              <View style={styles.cardGradient} />
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Теми не знайдені</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1A1525' 
  },
  
  content: { 
    flex: 1, 
    padding: 20, 
    paddingTop: 10 
  },

  header: {
    color: '#E6D9FF',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  subtitle: {
    color: '#9E8BB5',
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: '400',
  },

  searchContainer: {
    marginBottom: 24,
  },

  search: {
    width: "100%",
    backgroundColor: "#2A1F3A",
    padding: 16,
    borderRadius: 16,
    fontSize: 16,
    color: "#E6D9FF",
    borderWidth: 2,
    borderColor: "#5C3D7D",
    fontFamily: 'System',
  },

  listContent: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: '#2A1F3A',
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#5C3D7D',
  },

  cardContent: {
    padding: 20,
    zIndex: 2,
  },

  cardTitle: { 
    color: '#E6D9FF', 
    fontSize: 20, 
    fontWeight: '700',
    marginBottom: 10,
    lineHeight: 26,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  cardHint: {
    color: '#9D7BC9',
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.8,
  },

  cardGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#9D7BC9',
    opacity: 0.8,
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },

  emptyText: {
    color: '#9D7BC9',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});