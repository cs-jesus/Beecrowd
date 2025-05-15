dados= input().split()
a= float(dados[0])
b= float(dados[1])
c= float(dados[2])

triangulo= a*c/2
circulo= 3.14159 * c**2
trapezio= ((a+b)*c)/2
quadrado= b**2
reatangulo= a*b

print(f"TRIANGULO: {triangulo:.3f}")
print(f"CIRCULO: {circulo:.3f}")
print(f"TRAPEZIO: {trapezio:.3f}")
print(f"QUADRADO: {quadrado:.3f}")
print(f"RETANGULO: {reatangulo:.3f}")
