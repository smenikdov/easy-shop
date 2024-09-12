import classNames from 'classnames';

const Chip = ({ label, className }) => {
    return (
        <div
            className={classNames(className, 'inline-flex items-center bg-gray-800 text-white text-sm font-medium px-3 py-1 rounded-full')}
        >
            <span>{label}</span>
        </div>
    );
};

export default Chip;
