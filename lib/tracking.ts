/** Tracking leve — carrega GTM/Pixel só no clique, fora do bundle inicial. */

export async function trackCtaClick(
  id: string,
  label: string,
  planName?: string,
) {
  const [{ track }, { fbTrackCustom }] = await Promise.all([
    import("@/components/Gtm"),
    import("@/components/MetaPixel"),
  ]);

  track("cta_click", { cta_id: id, cta_label: label });

  if (planName) {
    fbTrackCustom(`CtaPlano${planName}`, { cta_id: id, cta_label: label });
  } else {
    fbTrackCustom("CtaClick", { cta_id: id, cta_label: label });
  }
}
