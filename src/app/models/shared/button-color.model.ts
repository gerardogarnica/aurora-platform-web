export type ButtonColor = 'default' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export type GetColorClases = Record<ButtonColor, Record<string, boolean>>;

export const BUTTON_COLOR_CLASSES: GetColorClases = {
    default: {
        'text-white': true,
        'bg-sky-500': true,
        'hover:bg-sky-800': true,
        'focus:ring-sky-300': true
    },
    success: {
        'text-white': true,
        'bg-green-500': true,
        'hover:bg-green-800': true,
        'focus:ring-green-300': true
    },
    danger: {
        'text-white': true,
        'bg-red-500': true,
        'hover:bg-red-800': true,
        'focus:ring-red-300': true
    },
    warning: {
        'text-white': true,
        'bg-yellow-500': true,
        'hover:bg-amber-600': true,
        'focus:ring-yellow-300': true
    },
    info: {
        'text-white': true,
        'bg-blue-500': true,
        'hover:bg-blue-800': true,
        'focus:ring-blue-300': true
    },
    light: {
        'text-white': true,
        'bg-slate-500': true,
        'hover:bg-slate-800': true,
        'focus:ring-slate-300': true
    },
    dark: {
        'text-gray-950': true,
        'bg-neutral-100': true,
        'hover:bg-neutral-400': true,
        'focus:ring-neutral-50': true
    }
};
