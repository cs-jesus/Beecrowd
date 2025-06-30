lados= [float(x) for x in input().split()]

maior= max(lados)
soma= sum(lados)
dif= soma-maior

if dif > maior:
    print(f"Perimetro = {soma:.1f}")

else:
    area = ((lados[0]+lados[1])*lados[2])/2
    print(f"Area = {area:.1f}")
