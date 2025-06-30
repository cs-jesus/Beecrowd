correto = input()
resposta = input().split()
acertos = 0

for resposta in resposta:
    if correto == resposta:
        acertos+=1
    
print(acertos)
