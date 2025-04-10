# Função para calcular IMC e peso ideal
df calcular_imc_e_peso_ideal(peso, altura):
    imc = peso / (altura ** 2)
    peso_ideal = 21.7 * (altura ** 2)  # Estimativa baseada em IMC médio saudável
    excesso = peso - peso_ideal
    return imc, peso_ideal, excesso

# Coleta do nome da cliente
nome = input("Digite o nome da cliente: ")

# Coleta do peso com validação
while True:
    try:
        peso = float(input("Digite o peso da cliente (em kg): "))
        if peso > 0:
            break
        else:
            print("O peso deve ser maior que zero.")
    except ValueError:
        print("Por favor, insira um número válido para o peso.")

# Coleta da altura com validação
while True:
    try:
        altura = float(input("Digite a altura da cliente (em metros, ex: 1.65): "))
        if altura > 0:
            break
        else:
            print("A altura deve ser maior que zero.")
    except ValueError:
        print("Por favor, insira um número válido para a altura.")

# Calcula IMC, peso ideal e excesso
imc, peso_ideal, excesso = calcular_imc_e_peso_ideal(peso, altura)

# Gera a cópia personalizada
copy = f"""
Boa noite {nome}, tudo bem? Me chamo Juliana, pode me chamar de Ju 😉  
Estamos oferecendo uma avaliação corporal gratuita, quer participar? 🥳  
Já que você me passou seus dados, aqui vai o resultado da sua avaliação:  

Seu IMC é {imc:.1f}, com base no seu peso de {peso} kg e altura de {altura} m.  
O peso ideal pra sua altura ficaria em torno de {peso_ideal:.1f} kg, então você está com cerca de {excesso:.1f} kg a mais.  
Mas me conta, {nome}, você tá pensando em emagrecer ou ajustar alguma coisa no seu corpo?

(Se você responder 'Sim' ou 'Não', continuamos a conversa!)  

(Se for 'Não')  
Entendi, {nome}! Só por curiosidade: você já pensou em voltar a usar aquela roupa favorita que não cabe mais? Ou quem sabe entrar em 2025 se sentindo mais leve e confiante? O que acha disso?

(Se for 'Sim' ou depois do 'Não')  
Legal, me conta então: o que mais te incomoda hoje? É a gordura localizada, os pneuzinhos, a pochete ou algo mais geral no corpo?  

(Depois da sua resposta)  
Eu te entendo totalmente, {nome}. E o que você acha que te segura pra resolver isso? Falta de tempo, ansiedade, ou algo assim?  

(Depois da sua resposta)  
Sabe, {nome}, a gente pode te ajudar com isso! Já ajudamos mais de 5 mil mulheres a se livrarem da pochete e outros incômodos – somos praticamente especialistas nisso 😊  
Dá uma olhada nos resultados dessas meninas aqui: [inserir fotos ou depoimentos]. Qual você mais gostou?  

(Depois da sua resposta)  
Massa, né? E você, {nome}, tá pronta pra transformar seu corpo também? ❤️  
Vou te explicar direitinho como funciona, tá bom?  
O Lift Detox Caps é uma cápsula natural com efeito bariátrico – ela queima gordura e elimina toxinas pelo corpo de forma simples e saudável 🌱🔥.  
Olha os benefícios que ela traz:  
- Queima gordura localizada  
- Reduz a fome  
- Acelera o metabolismo  
- Ajuda a controlar a ansiedade  
- Melhora o colesterol e dá mais disposição no dia a dia  
E o melhor: é tudo aprovado pela Anvisa!  
O que achou disso, {nome}?  

(Depois da sua resposta)  
Com base no que você me contou, {nome}, o tratamento que eu sugiro é o de 4 meses. E olha que legal: tá rolando uma promoção especial agora – você leva 3 potes e paga só por 2. Essa oferta é por tempo limitado, então é uma boa hora pra aproveitar. Faz sentido pra você?  

(Depois da sua resposta)  
Perfeito! Qual forma de pagamento você prefere?  

(Depois da sua resposta)  
Beleza, {nome}! Vou te enviar o link pra finalizar o pagamento, tá? É super simples, você só precisa preencher seus dados direitinho.  
[Link: https://themart.com.br/checkout/fd02530b-6f2b-46c3-91ea-a09a6227ff6a?af=tmus_K_ONwzIWcV]  
E se por algum motivo você não gostar, a gente resolve rapidinho pra você ficar tranquila, combinado? Quando você concluir, me avisa aqui que eu te explico tudinho sobre como usar o produto e te acompanho no processo. Vamos juntas nessa, {nome}! 😉
"""

# Exibe a cópia personalizada
print(copy)