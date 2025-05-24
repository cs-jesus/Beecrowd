import math

valor= int(input())
print(valor)
cedulas= {'100': 0, '50': 0, '20': 0, '10': 0, '5': 0, '2': 0, '1': 0}

cedulas['100'] = math.floor(valor/100)
valor %= 100

cedulas['50'] = math.floor(valor/50)
valor%= 50

cedulas['20'] = math.floor(valor/20)
valor%= 20

cedulas['10'] = math.floor(valor/10)
valor%= 10

cedulas['5'] = math.floor(valor/5)
valor%= 5

cedulas['2'] = math.floor(valor/2)
valor%= 2

cedulas['1'] = valor

for chave, valor in cedulas.items():
    print(f"{valor} nota(s) de R$ {chave},00")
