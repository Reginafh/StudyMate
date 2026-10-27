import { useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const initialTasks = [
  {
    id: '1',
    title: 'Finish programming assignment',
    due: 'Due tomorrow',
    completed: false,
  },
  {
    id: '2',
    title: 'Review lecture notes',
    due: 'Today',
    completed: true,
  },
  {
    id: '3',
    title: 'Prepare presentation',
    due: 'Due Friday',
    completed: false,
  },
];

const classes = [
  {
    id: '1',
    subject: 'Data Structures',
    time: '09:00 - 10:30 AM',
    room: 'Room A203',
  },
  {
    id: '2',
    subject: 'Database Systems',
    time: '01:00 - 02:30 PM',
    room: 'Room B105',
  },
];

export default function HomeScreen() {
  const [tasks, setTasks] = useState(initialTasks);

  const completedCount = tasks.filter(
    task => task.completed
  ).length;

  function toggleTask(id: string) {
    setTasks(current =>
      current.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.brand}>StudyMate</Text>
            <Text style={styles.greeting}>
              Good morning, Student!
            </Text>
            <Text style={styles.tagline}>
              Ready to study today?
            </Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Today's Overview
        </Text>

        <View style={styles.stats}>
          <View style={[styles.statCard, styles.purple]}>
            <Text style={styles.statNumber}>
              {classes.length}
            </Text>
            <Text style={styles.statLabel}>Classes</Text>
          </View>

          <View style={[styles.statCard, styles.orange]}>
            <Text style={styles.statNumber}>
              {tasks.length - completedCount}
            </Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>

          <View style={[styles.statCard, styles.green]}>
            <Text style={styles.statNumber}>
              {completedCount}
            </Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Upcoming Classes
        </Text>

        {classes.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.emoji}>📚</Text>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>
                {item.subject}
              </Text>
              <Text style={styles.muted}>{item.room}</Text>
              <Text style={styles.classTime}>
                {item.time}
              </Text>
            </View>
          </View>
        ))}

        <View style={styles.taskHeading}>
          <Text style={styles.sectionTitle}>My Tasks</Text>
          <Text style={styles.counter}>
            {completedCount}/{tasks.length} done
          </Text>
        </View>

        {tasks.map(task => (
          <Pressable
            key={task.id}
            onPress={() => toggleTask(task.id)}
            style={styles.card}
          >
            <View
              style={[
                styles.checkbox,
                task.completed && styles.checked,
              ]}
            >
              {task.completed && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>

            <View style={styles.cardInfo}>
              <Text
                style={[
                  styles.cardTitle,
                  task.completed && styles.strikethrough,
                ]}
              >
                {task.title}
              </Text>
              <Text style={styles.muted}>{task.due}</Text>
            </View>
          </Pressable>
        ))}

        <Text style={styles.footer}>
          Small steps every day lead to big results.
        </Text>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Text style={styles.activeNav}>⌂  Home</Text>
        <Text style={styles.navItem}>▦  Schedule</Text>
        <Text style={styles.navItem}>✓  Tasks</Text>
        <Text style={styles.navItem}>○  Profile</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 20,
    paddingBottom: 24,
  },
  header: {
    backgroundColor: '#4F46E5',
    borderRadius: 22,
    padding: 22,
    marginBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    flex: 1,
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 18,
  },
  greeting: {
    color: '#E0E7FF',
    fontSize: 14,
  },
  tagline: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
    marginTop: 7,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#4F46E5',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#0F172A',
    marginTop: 18,
    marginBottom: 14,
  },
  stats: {
    flexDirection: 'row',
    gap: 10,
  },
  statCard: {
    flex: 1,
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: 'center',
  },
  purple: { backgroundColor: '#EDE9FE' },
  orange: { backgroundColor: '#FFEDD5' },
  green: { backgroundColor: '#D1FAE5' },
  statNumber: {
    fontSize: 25,
    fontWeight: '800',
    color: '#0F172A',
  },
  statLabel: {
    fontSize: 12,
    color: '#475569',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  emoji: {
    fontSize: 25,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '700',
  },
  muted: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 5,
  },
  classTime: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  taskHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counter: {
    color: '#4F46E5',
    fontSize: 12,
    marginTop: 18,
    marginBottom: 14,
  },
  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#4F46E5',
    borderColor: '#4F46E5',
  },
  checkmark: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  strikethrough: {
    color: '#94A3B8',
    textDecorationLine: 'line-through',
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 20,
    marginBottom: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  activeNav: {
    color: '#4F46E5',
    fontWeight: '700',
    fontSize: 11,
  },
  navItem: {
    color: '#64748B',
    fontSize: 11,
  },
});
