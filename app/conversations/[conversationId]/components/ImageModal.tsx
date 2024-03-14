'use client';

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
    isOpen?: boolean;
    onclose: () => void;
    src?: string | null; 
}

const ImageModal: React.FC<ImageModalProps> = ({
    isOpen,
    onclose,
    src
}) => {
    if (!src) {
        return null;
    }

    return ( 
        <Modal isOpen={isOpen} onClose={onclose}>
            <div className="w-80 h-80">
                <Image
                    alt="Image"
                    className="object-cover"
                    fill
                    src={src}
                />
            </div>
        </Modal>
    );
}

export default ImageModal;