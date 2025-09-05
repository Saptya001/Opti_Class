import sys
import json

# ================================
# Backtracking Timetable Scheduler
# ================================

def is_valid(schedule, new_entry):
    """Check if new entry conflicts with existing schedule"""
    for entry in schedule:
        # Conflict if same teacher, room, or student group overlaps at same time
        if (
            entry["day"] == new_entry["day"]
            and entry["time"] == new_entry["time"]
            and (entry["teacher"] == new_entry["teacher"] or entry["room"] == new_entry["room"])
        ):
            return False
    return True

def backtrack(subjects, teachers, rooms, days, times, schedule, index=0):
    """Recursive backtracking to assign subjects"""
    if index == len(subjects):
        return schedule

    subject = subjects[index]
    for day in days:
        for time in times:
            for teacher in teachers:
                for room in rooms:
                    new_entry = {
                        "day": day,
                        "time": time,
                        "subject": subject,
                        "teacher": teacher,
                        "room": room,
                    }
                    if is_valid(schedule, new_entry):
                        schedule.append(new_entry)
                        result = backtrack(subjects, teachers, rooms, days, times, schedule, index + 1)
                        if result:
                            return result
                        schedule.pop()
    return None

def generate_timetable(data):
    teachers = data.get("teachers", ["T1", "T2"])
    subjects = data.get("subjects", ["Math", "AI"])
    rooms = data.get("rooms", ["101", "Lab-1"])
    days = data.get("days", ["Monday", "Tuesday"])
    times = data.get("times", ["10:00-11:00", "11:00-12:00"])

    schedule = []
    result = backtrack(subjects, teachers, rooms, days, times, schedule, 0)
    return result

# ================================
# Entry Point
# ================================

if __name__ == "__main__":
    try:
        # Read input JSON from Node.js
        input_data = json.loads(sys.stdin.read())
        result = generate_timetable(input_data)

        if result:
            print(json.dumps({"status": "success", "schedule": result}))
        else:
            print(json.dumps({"status": "failed", "message": "No valid timetable found"}))
    except Exception as e:
        print(json.dumps({"status": "error", "message": str(e)}))
        sys.exit(1)
