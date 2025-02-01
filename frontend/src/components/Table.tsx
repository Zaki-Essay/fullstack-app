import { ReactNode } from 'react';

interface TableProps<T extends object> {
    headers: {
        key: keyof T;
        label: string;
        headerClassName?: string;
        cellClassName?: string;
    }[];
    data: T[];
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    className?: string;
}

const Table = <T extends object>({
                                     headers,
                                     data,
                                     currentPage,
                                     totalPages,
                                     onPageChange,
                                     className = '',
                                 }: TableProps<T>) => {
    const showPagination = typeof currentPage === 'number' &&
        typeof totalPages === 'number' &&
        onPageChange;

    return (
        <div className={`rounded-lg border border-gray-200 dark:border-gray-700 ${className}`}>
            <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
                    <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header.key.toString()}
                                className={`px-4 py-2 font-medium whitespace-nowrap text-gray-900 dark:text-white text-center ${header.headerClassName || ''}`}
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data.map((row, rowIndex) => (
                        <tr  key={rowIndex}>

                            {headers.map((header) => (
                                <td
                                    key={header.key.toString()}
                                    className={`text-center px-4 py-2 whitespace-nowrap text-left ${
                                        header.cellClassName || 'text-gray-700 dark:text-gray-200'
                                    }`}
                                >
                                    {row[header.key] as ReactNode}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {showPagination && (
                <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 dark:border-gray-700">
                    <ol className="flex justify-end gap-1 text-xs font-medium">
                        <li>
                            <button
                                onClick={() => onPageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180 disabled:opacity-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                            >
                                <span className="sr-only">Prev Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </li>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <li key={page}>
                                <button
                                    onClick={() => onPageChange(page)}
                                    className={`block size-8 rounded-sm border text-center leading-8 ${
                                        page === currentPage
                                            ? 'border-blue-600 bg-blue-600 text-white dark:text-white'
                                            : 'border-gray-100 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white'
                                    }`}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}

                        <li>
                            <button
                                onClick={() => onPageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180 disabled:opacity-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                            >
                                <span className="sr-only">Next Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </li>
                    </ol>
                </div>
            )}
        </div>
    );
};

export default Table;