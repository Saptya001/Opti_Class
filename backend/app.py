from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow frontend (React/Vite) to call backend APIs

# Example route: Home
@app.route('/')
def home():
    return jsonify({"message": "Opti Class Backend is running 🚀"})


# Example route: Get prediction / optimization result
@app.route('/api/optimize', methods=['POST'])
def optimize():
    data = request.get_json()

    # Example input (you can customize this later)
    user_input = data.get("input", 0)

    # Dummy optimization logic (replace with your ML / algorithm)
    result = float(user_input) * 2  

    return jsonify({
        "input": user_input,
        "optimized_result": result
    })


if __name__ == '__main__':
    app.run(debug=True, port=5000)
