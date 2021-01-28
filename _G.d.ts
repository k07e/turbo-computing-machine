/* eslint @typescript-eslint/no-invalid-void-type: 0 */
declare namespace vim {
  export const api: {
    nvim_command: (this: void, command: string) => void
  }
}
