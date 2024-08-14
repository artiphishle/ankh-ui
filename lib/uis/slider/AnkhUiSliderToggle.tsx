import { AnkhUiIcon } from "@/uis/icon/AnkhUiIcon";
import type { IAnkhUiIntrinsicProps } from "ankh-types";
import Link from "next/link";

/** @todo Rename toggleId = targetId */
export function AnkhUiSliderToggle({ _ui: { id }, toggleId, icon, label }: IAnkhUiSliderToggle) {
  const $ = {
    display: 'flex',
    width: 'fit-content',
    alignItems: 'center',
    gap: '.4rem',
    backgroundColor: '#fff',
    color: '#000',
    padding: '.4rem',
    marginBottom: '.8rem'
  };

  return <Link onClick={() => window.location.hash = toggleId} style={$} data-ui="slider-toggle" title={`${toggleId}`} href={`#${toggleId}`}>
    {icon && <AnkhUiIcon name={icon} />}
    {label && <span>{label}</span>}
  </Link>
}

interface IAnkhUiSliderToggle extends IAnkhUiIntrinsicProps {
  readonly toggleId: string;
  readonly icon?: string;
  readonly label?: string;
}