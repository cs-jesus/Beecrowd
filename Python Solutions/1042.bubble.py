original= input().split()

ordenada= [int(x) for x in original]

n= len(ordenada)
for i in range(n):
    for j in range(0, n-i-1):
        if ordenada[j] > ordenada[j+1]:
            ordenada[j], ordenada[j+1] = ordenada[j+1], ordenada[j]

print("\n".join(map(str, ordenada)))
print("")
print("\n".join(original))
    
