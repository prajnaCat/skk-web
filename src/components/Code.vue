<template>
    <div class="form-group">
        <label class="control-label col-md-3 col-xs-12" for="Captcha">验证码</label>
        <div class="col-md-9">
            <input class="form-control captchaVal" data-val="true" data-val-required="请填写验证码" id="Captcha" name="Captcha" placeholder="验证码" type="text" value="" />
            <span class="field-validation-valid text-danger" data-valmsg-for="Captcha" data-valmsg-replace="true"></span>
        </div>
        <br />
        <div class="col-md-offset-3 col-md-9">
            <div class="BDC_CaptchaDiv " id="RegistrationCaptcha_CaptchaDiv" style="width: 285px !important; height: 50px !important; ">
                <div class="BDC_CaptchaImageDiv" id="RegistrationCaptcha_CaptchaImageDiv" style="width: 255px !important; height: 50px !important;">
                    <a href="//captcha.org/captcha.html?asp.net" title="BotDetect CAPTCHA ASP.NET Form Validation" onclick="RegistrationCaptcha.OnHelpLinkClick(); return RegistrationCaptcha.FollowHelpLink;">
                        <img class="BDC_CaptchaImage" id="RegistrationCaptcha_CaptchaImage" src="/BotDetectCaptcha.ashx?get=image&amp;c=RegistrationCaptcha&amp;t=a1ce3cd899ff4ccda38396930a7b837f" alt="Retype the CAPTCHA code from the image" /></a>
                </div>
                <div class="BDC_CaptchaIconsDiv" id="RegistrationCaptcha_CaptchaIconsDiv" style="width: 24px !important;">
                    <a class="BDC_ReloadLink" id="RegistrationCaptcha_ReloadLink" href="#" onclick="RegistrationCaptcha.ReloadImage(); this.blur(); return false;" title="Change the CAPTCHA code">
                        <img class="BDC_ReloadIcon" id="RegistrationCaptcha_ReloadIcon" src="/BotDetectCaptcha.ashx?get=reload-icon" alt="Change the CAPTCHA code" /></a>
                </div>
                <input type="hidden" name="BDC_VCID_RegistrationCaptcha" id="BDC_VCID_RegistrationCaptcha" value="a1ce3cd899ff4ccda38396930a7b837f" />
                <input type="hidden" name="BDC_BackWorkaround_RegistrationCaptcha" id="BDC_BackWorkaround_RegistrationCaptcha" value="0" /></div>
        </div>
    </div>
</template>

<script src="/BotDetectCaptcha.ashx?get=script-include" type="text/javascript"></script>
                <script type="text/javascript">//<![CDATA[
                    BotDetect.Init('RegistrationCaptcha', 'a1ce3cd899ff4ccda38396930a7b837f', 'Captcha', true, true, true, true, 1200, 7200, 0, false);
                    //]]>
                    </script>
                <script type="text/javascript">//<![CDATA[
                    try { (function() {
                            var bdrsn = document.createElement('script');
                            bdrsn.type = 'text/javascript';
                            bdrsn.async = true;
                            bdrsn.src = document.location.protocol + '//remote.captcha.com/include.js?i=ATABMAEwATQBMgEwFEpb4G_mdv2oV4MsPicFEcEkPnmjATIBMAEwATEBNAE2ATABMg56aC1jbW4tSGFucy1DTgMyNTUCNTA';
                            var fsn = document.getElementsByTagName('script')[0];
                            fsn.parentNode.insertBefore(bdrsn, fsn);
                        })();
                    } catch(err) {}
                    //]]>
</script>