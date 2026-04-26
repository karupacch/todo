import { Todo, FilterType } from '../types';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

const emptyMessages: Record<FilterType, string> = {
  all: 'タスクがありません。新しいタスクを追加してください！',
  active: 'アクティブなタスクはありません。',
  completed: '完了したタスクはありません。',
};

export function TodoList({ todos, filter, onToggle, onDelete, onEdit }: Props) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-gray-300">
        <svg
          className="w-14 h-14 mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <p className="text-sm text-gray-400">{emptyMessages[filter]}</p>
      </div>
    );
  }

  return (
    <div className="space-y-0.5">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
