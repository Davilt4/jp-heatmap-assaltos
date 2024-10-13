import pandas as pd
import locale

locale.setlocale(locale.LC_TIME, 'pt_BR.UTF-8')

data = pd.read_csv("data/dados_assaltos_ficticios_simples.csv")

data['Data'] = pd.to_datetime(data['Data'])
data['Data_por_extenso'] = data['Data'].dt.strftime('%d de %B de %Y')

# Funções para estatísticas.
def porcentagem_bairros():
    porcentagem_bairros = data['Bairro'].value_counts(normalize=True) * 100
    return porcentagem_bairros.round(2)

def data_com_mais_assaltos():
    dias_com_mais_assaltos = data['Data_por_extenso'].value_counts().to_dict()
    dicionario_fatiado = {chave: valor for chave, valor in dias_com_mais_assaltos.items() if valor > 2}
    return dicionario_fatiado
