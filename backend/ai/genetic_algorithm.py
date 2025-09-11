import sys
import json
import random

# ================================
# Helper functions for Genetic Algorithm
# ================================

def fitness(schedule):
    """
    Basic fitness function:
    Penalize overlapping classes for the same teacher/room.
    """
    score = 100
    seen = set()

    for entry in schedule:
        key_teacher = (entry["day"], entry["time"], entry["teacher"])
        key_room = (entry["day"], entry["time"], entry["room"])

        if key_teacher in seen or key_room in seen:
            score -= 10  # penalty for conflict
        else:
            seen.add(key_teacher)
            seen.add(key_room)

    return score


def crossover(parent1, parent2):
    """Single-point crossover"""
    split = len(parent1) // 2
    return parent1[:split] + parent2[split:]


def mutate(schedule, teachers, subjects, rooms, times, days):
    """Random mutation of one timetable entry"""
    idx = random.randint(0, len(schedule) - 1)
    schedule[idx] = {
        "day": random.choice(days),
        "time": random.choice(times),
        "subject": random.choice(subjects),
        "teacher": random.choice(teachers),
        "room": random.choice(rooms),
    }
    return schedule


# ================================
# Main Genetic Algorithm
# ================================

def generate_timetable(data):
    teachers = data.get("teachers", ["T1", "T2"])
    subjects = data.get("subjects", ["Math", "AI"])
    rooms = data.get("rooms", ["101", "Lab-1"])
    days = data.get("days", ["Monday", "Tuesday"])
    times = data.get("times", ["10:00-11:00", "11:00-12:00"])

    population_size = 10
    generations = 20

    # Initial population
    population = []
    for _ in range(population_size):
        schedule = []
        for subject in subjects:
            schedule.append({
                "day": random.choice(days),
                "time": random.choice(times),
                "subject": subject,
                "teacher": random.choice(teachers),
                "room": random.choice(rooms),
            })
        population.append(schedule)

    # Evolution loop
    for _ in range(generations):
        # Sort by fitness (higher = better)
        population = sorted(population, key=lambda s: -fitness(s))
        best = population[0]

        # Breed next generation
        new_pop = []
        for i in range(0, len(population) // 2, 2):
            parent1 = population[i]
            parent2 = population[i + 1]
            child = crossover(parent1, parent2)
            child = mutate(child, teachers, subjects, rooms, times, days)
            new_pop.append(child)

        population.extend(new_pop)

    # Return best timetable
    return population[0]


# ================================
# Entry Point
# ================================
if __name__ == "__main__":
    try:
        # Read JSON input from Node.js
        input_data = json.loads(sys.stdin.read())
        result = generate_timetable(input_data)

        print(json.dumps({"status": "success", "schedule": result}))
    except Exception as e:
        print(json.dumps({"status": "error", "message": str(e)}))
        sys.exit(1)
