dados= input().split()

item= dados[0]
qtde= int(dados[1])

produtos = {
    "1": 4.00,
    "2": 4.50,
    "3": 5.00,
    "4": 2.00,
    "5": 1.50,
}

if item in produtos:
    total= qtde*produtos[item]
    print(f"Total: R$ {total:.2f}")
