declare namespace vim {
  export const api: {
    nvim_command(this: void, command: string): void
  }
}
