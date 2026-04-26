import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterBar } from './components/FilterBar';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    activeCount,
    hasCompleted,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 tracking-tight">tode</h1>
          <p className="text-gray-400 mt-2 text-sm tracking-wide">シンプルなタスク管理</p>
        </div>

        {/* メインカード */}
        <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 p-6">
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
          <FilterBar
            filter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
            hasCompleted={hasCompleted}
            onClearCompleted={clearCompleted}
          />
        </div>

        <p className="text-center text-xs text-gray-300 mt-6">
          ダブルクリックでタスクを編集 · Enter で追加
        </p>
      </div>
    </div>
  );
}

export default App;
