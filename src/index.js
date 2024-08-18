module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let configMap = new Map(bracketsConfig); // Создала карту для быстрого поиска пар

  for (let char of str) {
      if (configMap.has(char)) { // Если символ является открывающей скобкой или спец случаем (||)
          if (stack.length > 0 && stack[stack.length - 1] === char && configMap.get(char) === char) {
              stack.pop(); // Закрывающая скобка в спец случае
          } else {
              stack.push(char); // Открывающая скобка
          }
      } else {
          if (stack.length === 0 || configMap.get(stack.pop()) !== char) {
              return false; // Скобки не совпадают
          }
      }
  }

  return stack.length === 0; // Если стек пуст, все скобки правильно закрыты
};
