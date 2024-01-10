import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { produce } from 'immer'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAudioStore = create(
    devtools(
        immer(
            persist(
                (set, get) => ({
                    journal: [],

                    addToJournal: (Data) => set(produce((state) => {
                        state.journal.push(Data)
                    })),

                    removeFromJournal: (index) => set(produce((state) => {
                        state.journal.splice(index, 1)
                    })),

                    updateJournal: ({ index, updatedData }) => {
                        set(
                            produce((state) => {
                                state.journal[index] = { ...state.journal[index], ...updatedData };
                            })
                        );
                    },

                    clearJournals: () =>
                        set(
                            produce((state) => {
                                state.journal = [];
                            })
                        ),
                }),
                {
                    name: 'audio-storage',
                    storage: {
                        async getItem(key) {
                            try {
                                const value = await AsyncStorage.getItem(key);
                                return value ? JSON.parse(value) : null;
                            } catch (error) {
                                console.error('AsyncStorage getItem error:', error);
                                return null;
                            }
                        },
                        async setItem(key, value) {
                            try {
                                await AsyncStorage.setItem(key, JSON.stringify(value));
                            } catch (error) {
                                console.error('AsyncStorage setItem error:', error);
                            }
                        },
                        async removeItem(key) {
                            try {
                                await AsyncStorage.removeItem(key);
                            } catch (error) {
                                console.error('AsyncStorage removeItem error:', error);
                            }
                        },
                    },

                }
            )
        )));
