n = int(input())

def fatorial(n):
    if n<=1:
        return 1
    
    else:
        return n*fatorial(n-1)

print(fatorial(n))
