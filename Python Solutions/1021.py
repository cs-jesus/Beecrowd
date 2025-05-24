from decimal import Decimal

dinheiro= Decimal(input())

cedulas= {100:0, 50:0, 20:0, 10:0, 5:0, 2:0}
moedas= {Decimal('1.00'): 0, Decimal('0.50'): 0, Decimal('0.25'): 0,
          Decimal('0.10'): 0, Decimal('0.05'): 0, Decimal('0.01'): 0}

print("NOTAS:")
for chave, valor in cedulas.items():
    cedulas[chave]= dinheiro // chave
    dinheiro%= chave
    print(f"{cedulas[chave]:.0f} nota(s) de R$ {chave}.00")
    
print("MOEDAS:")
for chave, valor in moedas.items():
    moedas[chave]= dinheiro // chave
    dinheiro%= chave
    print(f"{moedas[chave]:.0f} moeda(s) de R$ {chave:.2f}")
