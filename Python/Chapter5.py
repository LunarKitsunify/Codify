#region Task 1

# Цель задачи: Применить цикл for и условный оператор для подсчета четных чисел в списке.
# Инструкция:

# Введите числа через запятую с клавиатуры (input() и split()).
# Используйте цикл для подсчета четных чисел в списке.
# Выведите количество четных чисел.

# user_input = input("Введите числа через запятую: ")
# numbers = [int(item.strip()) for item in user_input.split(",")]
# even_count = sum(1 for num in numbers if num % 2 == 0)
# print(f"Количество четных чисел: {even_count}")

#endregion

#region Task 2

# Цель задачи: Использовать цикл for для создания таблицы умножения для заданного числа.
# Инструкция:

# Введите число с клавиатуры, для которого вы хотите создать таблицу умножения.
# Используйте цикл for для генерации таблицы умножения этого числа (от 1 до 10).
# Выведите результат для каждого умножения в формате "Число x i = Результат".

# number = int(input("Введите число для создания таблицы умножения: "))

# for i in range(1, 11): 
#     result = number * i
#     print(f"{number} x {i} = {result}")

#endregion

#region Task 3

# Цель задачи: Применить цикл for, условный оператор и методы строк для подсчета гласных и согласных букв в слове.
# Инструкция:

# Введите слово с клавиатуры (input()).
# Используйте цикл for, условный оператор и методы строк для подсчета гласных и согласных букв.
# Выведите результат.

# word = input("Введите слово: ").lower() 
# vowels = "аеёиоуыэюяaeiou"
# vowel_count = 0
# consonant_count = 0

# for char in word:
#     if char.isalpha():
#         if char in vowels:
#             vowel_count += 1
#         else:
#             consonant_count += 1

# print(f"Гласные: {vowel_count} , Согласные: {consonant_count}")

#endregion


#region Task 4

# Цель задачи: Применить цикл for и условный оператор для поиска минимального числа в списке (без использования функции min()).
# Инструкция:

# Введите числа через запятую с клавиатуры (input() и split()).
# Используйте цикл for и условный оператор (if) для поиска минимального числа в списке.
# Выведите минимальное число.

# user_input = input("Введите числа через запятую: ")
# numbers = [int(item.strip()) for item in user_input.split(",")]

# min_number = numbers[0]

# for num in numbers:
#     if num < min_number:  
#         min_number = num

# print(f"Минимальное число: {min_number}")

#endregion 

#region Task 5

# Цель задачи: Применить цикл for и методы списков для удаления дубликатов из списка.
# Инструкция:

# Введите элементы списка через запятую с клавиатуры (input() и split()).
# Используйте цикл for и методы списков для удаления дубликатов.
# Выведите новый список.

# user_input = input("Введите элементы списка через запятую: ")
# original_list = [item.strip() for item in user_input.split(",")]

# unique_list = []
# for item in original_list:
#     if item not in unique_list:  
#         unique_list.append(item)

# print(f"Список без дубликатов: {unique_list}")

#endregion

#region Task 6

# Цель задачи: Применить цикл for и операцию умножения к каждому элементу списка.
# Инструкция:

# Введите числа через запятую с клавиатуры (input() и split()).
# Введите число, на которое нужно умножить каждый элемент списка (input()).
# Используйте цикл for для умножения каждого элемента списка на указанное число.
# Выведите новый список.

# user_input = input("Введите элементы списка через запятую: ")
# int_Value = int(input("Введите число для умножения: "))
# original_list = [item.strip() for item in user_input.split(",")]
# new_list = [];

# for item in original_list:
#     item = int(item) * int_Value
#     new_list.append(item)

# print(f"Новый список:  {new_list}")
    
#endregion

#region Task 7

# Краткое описание: Найти и вывести минимальный элемент в заданном списке.

# Инструкция: Напишите программу с помощью for, которая принимает список чисел и возвращает максимальное значение в этом списке. Без использования функции max

# user_input = input("Введите числа через запятую: ")
# numbers = [int(item.strip()) for item in user_input.split(",")]

# max_number = numbers[0]

# for num in numbers:
#     if num > max_number:  
#         max_number = num

# print(f"Максимальный  число: {max_number}")

#endregion