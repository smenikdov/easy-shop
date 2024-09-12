'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const CategoryFilter = (props) => {
    const {
        items,
    } = props;

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const category = searchParams.get('category') || null;

    const handleClick = (name) => {
        const params = new URLSearchParams(searchParams);
        params.set('category', name);
        params.set('page', 1);
        router.replace(`${pathname}?${params}`);
    };

    return (
        <div className="bg-gray-800 text-white rounded-md mx-4">
            <div className="container mx-auto p-6">
                <ul className="flex items-stretch">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleClick(item)}
                            className={`cursor-pointer p-4 mx-2 rounded-lg shadow-md transition-colors ${ item === category ? 'bg-blue-500 text-white' : 'bg-gray-700' }`}
                            style={{
                                flex: '1',
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryFilter;
