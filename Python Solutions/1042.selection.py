original= input().split()

ordenada= [int(x) for x in original]

n= len(ordenada)
for i in range(n):
    minimo=i
    for j in range(i+1, n):
        if ordenada[j] < ordenada[minimo]:
            minimo=j
            
    ordenada[i], ordenada[minimo] = ordenada[minimo], ordenada[i]

print("\n".join(map(str, ordenada)))
print("")
print("\n".join(original))
    
