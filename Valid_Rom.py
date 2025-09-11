import re

# Function to check if a string is a valid Roman numeral
def is_valid_roman(roman: str) -> bool:
    # Regex pattern for valid Roman numerals (1–3999)
    pattern = r"^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$"
    return bool(re.match(pattern, roman))

# Test cases
nums = ["XII", "IV", "MMXXV", "IIII", "VX"]

for n in nums:
    print(f"{n}: {is_valid_roman(n)}")
