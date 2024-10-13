from app.main import app
from flask import render_template,url_for,jsonify
from data.dados import porcentagem_bairros,data_com_mais_assaltos,data,carregar_dados_por_ano

@app.route("/")
def home():
    return render_template("home.html")

@app.route('/estatisticas')
def estatisticas():
    return render_template("estatisticas.html", porcentagem_bairros=porcentagem_bairros(), dicionario_fatiado=data_com_mais_assaltos())

@app.route('/dados_json')
def dados_json():
    dados_json = data[['Latitude', 'Longitude', 'Bairro']].to_dict(orient='records')
    return jsonify(dados_json)

@app.route('/dados/<int:ano>')
def ano(ano):
    return jsonify(carregar_dados_por_ano(ano))