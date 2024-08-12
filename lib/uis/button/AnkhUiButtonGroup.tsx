import type { PropsWithChildren } from "react"
import type { IAnkhUiIntrinsicProps } from "ankh-types"

export function AnkhUiButtonGroup({ children }: IAnkhUiButtonGroup) {
  return <div data-ui="button-group" style={{ borderCollapse: 'collapse', display: 'flex', alignItems: 'center', borderRadius: '1rem' }}>
    {children}
  </div>
}

interface IAnkhUiButtonGroup extends IAnkhUiIntrinsicProps, PropsWithChildren { }