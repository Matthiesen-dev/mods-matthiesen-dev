/**
 * Defines the structure of a model that can be viewed in the ModelViewer component.
 * Each model has a name, a path to the model file, and an optional animation name.
 */
export interface ViewerModel {
    name: string;
    path: string;
    animation?: string;
}

export interface Command {
    command: string;
    description: string;
    usage: string;
    permissionNode?: string;
    requiresOp?: boolean;
    controlledByConfig?: boolean;
}

export type Commands = Array<Command>;