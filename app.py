from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/survey', methods=['POST'])
def survey():
    # Обработка данных опроса
    data = request.form
    print(data)
    return "Спасибо за участие в опросе!"

if __name__ == '__main__':
    app.run(debug=True)