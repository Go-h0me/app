import { isBlank } from '@morioh/helper';

type AvatarProps = {
    src?: string,
    size?: string
};

export default function Avatar({ src, size = "h-12 w-12" }: AvatarProps) {

    return (
        !isBlank(src) ?
            <img src={src} className={`rounded-full block object-cover bg-gray-200 ${size}`} />
            :
            <svg xmlns="http://www.w3.org/2000/svg" className={`rounded-full text-white bg-gray-400 focus:outline-none hover:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition ${size}`} fill="currentColor" viewBox="0 0 16 16">
                <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5l-4.777-3.947z" />
            </svg>
    );

}