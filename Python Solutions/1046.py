hora= [int(x) for x in input().split()]

if hora[0] == hora[1]:
    print("O JOGO DUROU 24 HORA(S)")

else:
    duracao= (hora[1]-hora[0]) % 24
    print(f"O JOGO DUROU {duracao} HORA(S)")
