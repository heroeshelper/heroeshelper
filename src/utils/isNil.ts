export const isNil = <T>(input: T | null | undefined): input is null | undefined => {
    return input === null || input === undefined;
};

export const isNotNil = <T>(input: T | null | undefined): input is T => !isNil(input);
