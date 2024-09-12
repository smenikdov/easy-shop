'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import classNames from 'classnames';

const Pagination = (props) => {
    const { totalPages, className, ...otherProps } = props;

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const currentPage = +searchParams.get('page') || 1;

    const changePage = (number) => {
        if (number === currentPage) {
            return;
        }
        const params = new URLSearchParams(searchParams);
        params.set('page', number);
        router.replace(`${pathname}?${params}`);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => changePage(i)}
                    className={`mx-1 px-3 py-1 rounded-lg ${
                        currentPage === i
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-300 hover:bg-gray-400 text-black'
                    }`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className={classNames('flex justify-center items-center space-x-2', className)} {...otherProps}>
            <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                Prev
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
