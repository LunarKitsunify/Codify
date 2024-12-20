#region Task 1

# Пользователь хочет создать список покупок перед походом в магазин. Нам нужно создать программу, которая принимает ввод пользователя, формирует список покупок и проверяет, есть ли определенные продукты в списке. После этого программа выводит сообщение о наличии или отсутствии нужных продуктов.

# Шаги для решения:
# Попросить пользователя ввести список покупок.
# Разделить введенную строку на элементы списка.
# Попросить пользователя ввести продукт для проверки его наличия в списке.
# Проверить, есть ли введенный продукт в списке покупок.
# Вывести сообщение о наличии или отсутствии введенного продукта в списке.

# value_String = input("Введите список покупок (через запятую): ")
# product = input("Введите продукт для проверки наличия в списке покупок: ")

# product_list = [item.strip().lower() for item in value_String.split(",")]

# if product.lower() in product_list:
#     print(f"{product} есть в списке продуктов.")
# else:
#     print(f"{product} отсутствует в списке покупок.")

#endregion

#region Task2 

# Цель задачи: Подсчитать, сколько раз определенный элемент встречается в списке с использованием метода count().

# Инструкция:

# Создайте список с элементами, например: my_list = [1, 2, 3, 2, 4, 2, 5].
# Используйте ввод пользователя с помощью input() для указания элемента, который вы хотите подсчитать.
# Используйте метод count() для подсчета количества вхождений указанного элемента.
# Выведите результат подсчета.

# my_list = [1, 2, 3, 2, 4, 2, 5]
# value_Int = int(input("Введите число что бы подсчитать кол-во: "))

# print(f"Число {value_Int} встречается в списке {my_list.count(value_Int)} раз(а).")

#endregion

#region Task 3

# Цель задачи: Найти индекс первого вхождения определенного элемента в списке с использованием метода index().

# Инструкция:

# Создайте список с элементами, например: my_list = [10, 20, 30, 40, 50].
# Используйте ввод пользователя с помощью input() для указания элемента, который вы хотите найти в списке.
# Используйте метод index() для поиска индекса первого вхождения указанного элемента.
# Выведите найденный индекс.

# my_list = [10, 20, 30, 40, 50]
# value_Int = int(input("Введите число что бы узнать его индекс: "))
# print(f"Число {value_Int} имеет индекс {my_list.index(value_Int)}.")
#endregion 

#region Task 4

# Краткое описание: Найти и вывести минимальный элемент в заданном списке.

# Инструкция: Напишите функцию, которая принимает список чисел и возвращает минимальное значение в этом списке. Используйте встроенную функцию min или реализуйте алгоритм поиска минимального значения самостоятельно.

# user_input = input("Введите список чисел через запятую: ")
# lst = [int(item.strip()) for item in user_input.split(",")]
# print(f"Минимальный элемент: {min(lst)}")

#endregion

#region Task 5

# Цель задачи: Написать функцию, которая находит максимальный элемент в списке.

# Инструкции:

# Создайте массив с числами.
# Внутри кода, используя функцию max(), найдите максимальный элемент в списке.
# Верните найденное значение.
# Пример ввода и ожидаемый вывод:

# user_input = input("Введите список чисел через запятую: ")
# lst = [int(item.strip()) for item in user_input.split(",")]
# print(f"Максимальный элемент: {max(lst)}")

#endregion

#region Task 6

# Краткое описание: Перевернуть список и вывести его в обратном порядке.
# Инструкция: Напишите функцию, которая принимает список и возвращает новый список с элементами в обратном порядке.

# user_input = input("Введите список чисел через запятую: ")
# lst = [int(item.strip()) for item in user_input.split(",")]
# print(f"Список в обратном порядке: {list(reversed(lst))}")

#endregion

#region Task 7

# Краткое описание: Найти сумму всех элементов в списке.

# Инструкция: Напишите функцию, которая принимает список чисел и возвращает сумму всех его элементов. Используйте встроенную функцию sum.

# user_input = input("Введите список чисел через запятую: ")
# lst = [int(item.strip()) for item in user_input.split(",")]
# print(f"Сумма всех элементов в списке: {sum(lst)}")

#endregion 

#region Task 8

# Краткое описание: Проверить, является ли список палиндромом (читается одинаково с обоих концов).

# Инструкция: Напишите функцию, которая принимает список и возвращает True, если список является палиндромом, и False в противном случае.

# Пример ввода и вывода:

# lst = [1, 2, 3, 2, 1]
# Вывод:

# True

# user_input = input("Введите список чисел через запятую: ")
# lst = [int(item.strip()) for item in user_input.split(",")]

# if lst == list(reversed(lst)):
#     print('True')
# else:
#     print('False')


#endregion