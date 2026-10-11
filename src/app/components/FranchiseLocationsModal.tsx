'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface FranchiseLocation {
    name: string;
    distance: string;
    status: 'open' | 'closed';
    image: string;
}

interface FranchiseLocationsModalProps {
    isOpen: boolean;
    onClose: () => void;
    cityName: string;
}

const locations: FranchiseLocation[] = [
    {
        name: 'kollam, Attingal',
        distance: '6.7 km',
        status: 'open',
        image: 'linear-gradient(135deg, #FFA07A 0%, #FF6B6B 100%)',
    },
    {
        name: 'kollam, Attingal',
        distance: '6.7 km',
        status: 'open',
        image: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 100%)',
    },
    {
        name: 'kollam, Attingal',
        distance: '6.7 km',
        status: 'open',
        image: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    },
];

export function FranchiseLocationsModal({ isOpen, onClose, cityName }: FranchiseLocationsModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ duration: 0.4, type: 'spring', damping: 25 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none"
                    >
                        <div className="bg-white rounded-[20px] shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 md:px-8 py-4 flex items-center justify-between rounded-t-[20px] z-10">
                                <h2 className="font-['Roboto',sans-serif] font-bold text-[#4C3026] text-[24px] md:text-[32px]">
                                    {cityName} Locations
                                </h2>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X size={24} className="text-gray-600" />
                                </motion.button>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {locations.map((location, index) => (
                                        <motion.div
                                            key={`${location.name}-${index}`}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.4 }}
                                            whileHover={{ y: -5 }}
                                            className="flex flex-col"
                                        >
                                            {/* Image Card */}
                                            <div className="relative w-full h-[228px] rounded-[15px] overflow-hidden mb-4">
                                                {/* Placeholder gradient background */}
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        background: location.image,
                                                    }}
                                                />

                                                {/* Ice cream pattern overlay */}
                                                <div
                                                    className="absolute inset-0 opacity-20"
                                                    style={{
                                                        backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                                                    }}
                                                />

                                                {/* Dark overlay for button visibility */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                                {/* Status Badge */}
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                                                    className="absolute top-3 right-3 px-4 py-1.5 bg-[#71A549] rounded-[15px]"
                                                >
                                                    <span className="font-['Roboto',sans-serif] font-medium text-white text-[16px] md:text-[20px] uppercase">
                                                        {location.status}
                                                    </span>
                                                </motion.div>

                                                {/* Let's go Button */}
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[123px] h-[38px] flex items-center justify-center rounded-[25px] border-[0.5px] border-[#271B17]"
                                                    style={{
                                                        background: 'rgba(0, 0, 0, 0.5)',
                                                        boxShadow: 'inset 0px 0px 14px rgba(0, 0, 0, 0.45)',
                                                    }}
                                                >
                                                    <span className="font-['Roboto',sans-serif] font-bold text-white text-[18px] md:text-[20px]">
                                                        Let&apos;s go
                                                    </span>
                                                </motion.button>
                                            </div>

                                            {/* Location Info */}
                                            <div className="flex flex-col">
                                                <h3 className="font-['Roboto',sans-serif] font-semibold text-[rgba(0,0,0,0.85)] text-[20px] md:text-[24px] leading-[25px] capitalize mb-2">
                                                    {location.name}
                                                </h3>
                                                <p className="font-['Roboto',sans-serif] font-semibold text-[rgba(0,0,0,0.5)] text-[18px] md:text-[20px] leading-[25px] capitalize">
                                                    {location.distance}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Additional Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                    className="mt-8 p-6 bg-[#FEE5B4]/20 rounded-[15px] border border-[#FEE5B4]"
                                >
                                    <p className="font-['Roboto',sans-serif] text-[rgba(0,0,0,0.7)] text-[14px] md:text-[16px] leading-relaxed text-center">
                                        Visit any of our {cityName} locations to experience the finest ice cream made with fresh, natural ingredients.
                                        Each store offers a unique ambiance while maintaining our commitment to quality and taste.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Footer */}
                            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 md:px-8 py-4 flex items-center justify-center gap-4 rounded-b-[20px]">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onClose}
                                    className="px-6 py-2.5 bg-[#4C3026] text-white rounded-[25px] font-['Roboto',sans-serif] font-bold text-[16px] md:text-[18px] shadow-lg"
                                >
                                    Close
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
